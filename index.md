---
title: Home
---

# Obsidian Vault

Interconnected Obsidian notes for the Agentic Coding Workshop.

- **Agentic Coding** — 1,231 concept notes across 21 domains
- **Hermes Agent** — 780 concept notes across 15 domains
- **Package Development** — 286 concept notes across 15 domains

## Browse by Domain

### Agentic Coding

- [[Agentic Coding/Agentic Coding MOC|Agentic Coding — Master Map]]

### Hermes Agent

- [[Hermes Agent/Hermes Agent MOC|Hermes Agent — Master Map]]

### Package Development

- [[Package Development/Package Development MOC|Package Development — Master Map]]

## Browse by Tag

See all [tags](/tags/) or use the tag links on each note.

## Search

Use the search bar in the sidebar to find any concept across all notes.

## Graph View

Each note page includes a graph view in the right sidebar showing connections to other notes. Click the global graph icon to see the full network.

## Pull to JupyterHub

The repo clones to `~/obsidian-vault/` on your Jupyter server. Fill in the form and click the generated link:

<div id="nbgitpuller-generator">
<style>
#nbgitpuller-generator { max-width: 520px; margin: 1rem 0; font-size: 0.95rem; }
#nbgitpuller-generator label { font-weight: 600; display: block; margin-top: 0.75rem; }
#nbgitpuller-generator .hint { font-weight: 400; font-size: 0.82rem; color: var(--gray); display: block; margin-top: 0.15rem; }
#nbgitpuller-generator input, #nbgitpuller-generator select { width: 100%; padding: 0.4rem; margin-top: 0.25rem; border: 1px solid var(--gray); border-radius: 4px; font-size: 0.9rem; background: var(--light); color: var(--dark); box-sizing: border-box; }
#nbgitpuller-generator button { margin-top: 1rem; padding: 0.5rem 1.2rem; background: var(--tertiary); color: var(--light); border: none; border-radius: 4px; cursor: pointer; font-size: 0.95rem; }
#nbgitpuller-generator button:hover { opacity: 0.85; }
#nbgitpuller-result { margin-top: 1rem; display: none; }
#nbgitpuller-result-url { background: var(--lightgray); padding: 0.6rem; border-radius: 4px; word-break: break-all; font-family: monospace; font-size: 0.85rem; }
#nbgitpuller-result-link { display: inline-block; margin-top: 0.5rem; font-weight: 600; }
</style>
<label for="nbgp-hub">JupyterHub URL <span style="color:#c00">*</span></label>
<input type="url" id="nbgp-hub" placeholder="https://jupyterhub.example.com" required>
<span class="hint">e.g. https://dive.cs.cityu.edu.hk/cs1302_edb</span>

<label for="nbgp-branch">Branch</label>
<input type="text" id="nbgp-branch" value="main">

<label for="nbgp-subpath">Sub-path to open (optional)</label>
<input type="text" id="nbgp-subpath" placeholder="Leave empty for repo root">
<span class="hint">A folder inside the repo to open after cloning, e.g. "Agentic Coding" or "Hermes Agent". The repo itself always clones to <code>~/obsidian-vault/</code>.</span>

<label for="nbgp-app">Jupyter App</label>
<select id="nbgp-app">
<option value="lab">JupyterLab</option>
<option value="notebook">Classic Notebook</option>
</select>

<button onclick="nbgpGenerate()">Generate Link</button>

<div id="nbgitpuller-result">
<p><strong>Your link:</strong></p>
<div id="nbgitpuller-result-url"></div>
<a id="nbgitpuller-result-link" href="#">Open link →</a>
</div>
</div>
<script>
function nbgpGenerate() {
  var hub = document.getElementById('nbgp-hub').value.replace(/\/+$/, '');
  var branch = document.getElementById('nbgp-branch').value || 'main';
  var subPath = document.getElementById('nbgp-subpath').value.trim();
  var app = document.getElementById('nbgp-app').value;
  if (!hub) { alert('Please enter your JupyterHub URL'); return; }
  var repo = 'https://github.com/dive4dec/obsidian-vault';
  var url = hub + '/hub/user-redirect/git-pull?repo=' + encodeURIComponent(repo)
    + '&branch=' + encodeURIComponent(branch)
    + '&app=' + app;
  if (subPath) {
    url += '&subPath=' + encodeURIComponent(subPath);
  }
  document.getElementById('nbgitpuller-result-url').textContent = url;
  document.getElementById('nbgitpuller-result-link').href = url;
  document.getElementById('nbgitpuller-result').style.display = 'block';
}
</script>
