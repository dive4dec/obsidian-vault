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

.PHONY: site-init site-build site-serve site-deploy site-clean

# One-time setup: install Quartz npm dependencies
site-init:
	cd $(QUARTZ_DIR) && npm install

# Build the static site
site-build:
	cd $(QUARTZ_DIR) && npx quartz build -d $(CONTENT_DIR)

# Serve locally for preview
site-serve: site-build
	cd $(QUARTZ_DIR) && npx quartz serve -p $(PORT)

# Deploy to GitHub Pages (gh-pages branch)
site-deploy: site-build
	@echo "Deploying to gh-pages branch..."
	@cd $(QUARTZ_DIR) && \
	rm -rf .gh-pages-tmp && \
	cp -r public .gh-pages-tmp && \
	cd .gh-pages-tmp && \
	git init -q && \
	git checkout -b $(PAGES_BRANCH) && \
	git add -A && \
	git commit -q -m "Deploy Quartz site $$(date -u '+%Y-%m-%d %H:%M UTC')" && \
	git push --force origin $(PAGES_BRANCH) && \
	cd .. && rm -rf .gh-pages-tmp
	@echo ""
	@echo "Deployed to gh-pages branch."
	@echo "Enable GitHub Pages: Repo Settings → Pages → Source: Deploy from branch → gh-pages"
	@echo "Site URL: https://dive4dec.github.io/obsidian-vault/"

# Clean build output
site-clean:
	rm -rf $(OUTPUT_DIR)
