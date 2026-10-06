# Makefile for Obsidian Vault — Quartz GitHub Pages + nbgitpuller
#
# Usage:
#   make site-init     # One-time: install Quartz dependencies
#   make site-build    # Build static site into .site/public/
#   make site-serve    # Preview locally at http://localhost:8080
#   make site-deploy   # Build + push to gh-pages branch
#   make site-clean    # Remove build output

QUARTZ_DIR := .site
CONTENT_DIR := content
OUTPUT_DIR := $(QUARTZ_DIR)/public
PORT := 8080

# Branch for GitHub Pages
PAGES_BRANCH := gh-pages

.PHONY: site-init site-build site-serve site-deploy site-clean site-fixlinks

# One-time setup: install Quartz npm dependencies
site-init:
	cd $(QUARTZ_DIR) && npm install

# Build the static site, then repair same-folder wikilink resolution
# (Quartz's "shortest" strategy breaks bare [[links]] whose note name is not
# unique in the vault; fix_links.py re-anchors them same-folder-first).
# Invoke the local bin directly: `npx quartz` breaks when the npm cache dir
# contains root-owned files (EACCES on _npx lock).
site-build:
	cd $(QUARTZ_DIR) && node quartz/bootstrap-cli.mjs build -d $(CONTENT_DIR)
	python3 $(QUARTZ_DIR)/fix_links.py $(QUARTZ_DIR)/public

# Re-run the link repair on the existing public/ (idempotent; fast).
site-fixlinks:
	python3 $(QUARTZ_DIR)/fix_links.py $(QUARTZ_DIR)/public

# Serve locally for preview
site-serve:
	cd $(QUARTZ_DIR) && python3 serve.py $(PORT) public

# Deploy to GitHub Pages (gh-pages branch)
# Always rebuild fresh (build + link repair) then push, so the deployed site is
# complete (MOC pages + new areas included) regardless of what is left on disk.
site-deploy: site-build site-upload

site-upload:
	@echo "Deploying to $(PAGES_BRANCH) branch..."
	@ORIGIN=$$(git remote get-url origin) && \
	 if [ -z "$$ORIGIN" ]; then echo "error: no origin remote. Run: git remote add origin git@github.com:dive4dec/obsidian-vault.git"; exit 1; fi && \
	 TMP=$$(mktemp -d) && \
	 cp -r $(QUARTZ_DIR)/public "$$TMP/site" && \
	 cd "$$TMP/site" && \
	 git init -q && \
	 git checkout -b $(PAGES_BRANCH) && \
	 git config user.name "obsidian-vault Deploy" && \
	 git config user.email "deploy@obsidian-vault.local" && \
	 echo "  indexing ~$$(find . -type f | wc -l) files (this takes a moment)..." && \
	 git add -A && \
	 git commit -q -m "Deploy Quartz site $$(date -u '+%Y-%m-%d %H:%M UTC')" && \
	 git remote add origin "$$ORIGIN" && \
	 git push --force -u origin $(PAGES_BRANCH); \
	 STATUS=$$?; cd /; rm -rf "$$TMP"; exit $$STATUS
	@echo ""
	@echo "Deployed to $(PAGES_BRANCH) branch."
	@echo "Enable GitHub Pages: Repo Settings → Pages → Source: Deploy from branch → $(PAGES_BRANCH) / (root)"
	@echo "Site URL: https://dive4dec.github.io/obsidian-vault/"

# Clean build output
site-clean:
	rm -rf $(OUTPUT_DIR)
