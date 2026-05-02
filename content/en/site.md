---
title: Website information
likeTitle: Site info
description: This page contains the technical information about my website.
type: docs
params:
  body_class: td-no-left-sidebar
  hide_feedback: true
  cSpell:ignore: docsy
---

Site built with [<span class="badge bg-primary text-bg-primary fs-6">Docsy
v{{% param version %}} </span>][version]

## Build information

{{% td/site-build-info/netlify team="docsy-example" %}}

[version]: <https://github.com/google/docsy/releases/v{{% param version %}}>

Site running on Github Pages. To learn more about setting up Github Pages, visit [This blogpost](https://justinverstijnen.nl/getting-started-with-github-pages/)

[![jv-media-6969-fe38958f74ce.png](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/site/jv-media-6969-fe38958f74ce.png)](https://sajvwebsiteblobstorage.blob.core.windows.net/blog/site/jv-media-6969-fe38958f74ce.png)

## Latest updates

Below you can see the latest updates to my website:

<div id="github-contributions-widget">
  <p>Loading my latest GitHub contributions...</p>
</div>

<style>
  #github-contributions-widget {
    font-family: Arial, sans-serif;
    max-width: 520px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 16px;
    background: #fff;
  }

  #github-contributions-widget h3 {
    margin: 0 0 12px;
    font-size: 18px;
  }

  .github-commit {
    padding: 10px 0;
    border-top: 1px solid #eee;
  }

  .github-commit:first-of-type {
    border-top: none;
  }

  .github-commit-title {
    font-weight: 700;
    margin-bottom: 4px;
    line-height: 1.35;
  }

  .github-commit-meta {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
  }

  .github-commit a {
    color: #0969da;
    text-decoration: none;
  }

  .github-commit a:hover {
    text-decoration: underline;
  }
</style>

<script>
  (async function () {
    const owner = "JustinVerstijnen";
    const repo = "JVTechnicalBlog";
    const container = document.getElementById("github-contributions-widget");

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function formatDate(dateString) {
      return new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(dateString));
    }

    function getFirstLine(message) {
      return String(message || "").split("\n")[0];
    }

    try {
      const response = await fetch(
        `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits?per_page=3`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28"
          }
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }

      const commits = await response.json();

      if (!Array.isArray(commits) || commits.length === 0) {
        container.innerHTML = `
          <h3>Latest GitHub Contributions</h3>
          <p>No public commits found for this repository.</p>
        `;
        return;
      }

      container.innerHTML = `
        <h3>Latest GitHub Contributions</h3>
        ${commits.map(commit => {
          const message = escapeHtml(getFirstLine(commit.commit.message));
          const authorName = escapeHtml(
            commit.commit.author && commit.commit.author.name
              ? commit.commit.author.name
              : "Unknown author"
          );
          const commitDate = commit.commit.author
            ? formatDate(commit.commit.author.date)
            : "";
          const commitUrl = commit.html_url;
          const shortSha = escapeHtml(commit.sha.substring(0, 7));

          return `
            <div class="github-commit">
              <div class="github-commit-title">
                <a href="${commitUrl}" target="_blank" rel="noopener noreferrer">
                  ${message}
                </a>
              </div>
              <div class="github-commit-meta">
                ${authorName} · ${commitDate} · ${shortSha}
              </div>
            </div>
          `;
        }).join("")}
      `;
    } catch (error) {
      container.innerHTML = `
        <h3>Latest GitHub Contributions</h3>
        <p>Unable to load GitHub contributions.</p>
      `;
      console.error(error);
    }
  })();
</script>