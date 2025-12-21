#!/usr/bin/env bash
set -euo pipefail

# Usage:
# 1) Ensure you are authenticated with gh (recommended) or set GITHUB_TOKEN env var.
# 2) Run: ./scripts/create_and_push_github.sh RadekPa my-repo-name --public
# If repo name omitted, uses current folder name.

ACCOUNT="$1"
REPO_NAME="${2:-}"
VISIBILITY="${3:-public}"

if [ -z "$ACCOUNT" ]; then
  echo "Usage: $0 <github-account> [repo-name] [public|private]"
  exit 1
fi

if [ -z "$REPO_NAME" ]; then
  # detect repo name from folder
  REPO_NAME=$(basename "$(pwd)")
fi

echo "Will create repo: $ACCOUNT/$REPO_NAME (visibility: $VISIBILITY) and push current branch"

BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)
echo "Current branch: $BRANCH"

if command -v gh >/dev/null 2>&1; then
  echo "Using gh CLI to create repository..."
  # create repo under specified account (org or user). --confirm to skip prompts
  gh repo create "$ACCOUNT/$REPO_NAME" --${VISIBILITY} --source=. --remote=origin --push --confirm || true
else
  if [ -z "${GITHUB_TOKEN:-}" ]; then
    echo "gh CLI not found and GITHUB_TOKEN not set. Install gh (https://cli.github.com/) or set GITHUB_TOKEN and try again." >&2
    exit 1
  fi

  echo "Creating repository via GitHub API..."
  RESP=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" -H "Accept: application/vnd.github+json" \
    https://api.github.com/user/repos -d "{\"name\": \"${REPO_NAME}\", \"private\": $( [ "$VISIBILITY" = "private" ] && echo true || echo false ) }")
  # attempt to set remote and push
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/${ACCOUNT}/${REPO_NAME}.git"
  git push -u origin "$BRANCH"
fi

echo "Done. Repository should be available at: https://github.com/${ACCOUNT}/${REPO_NAME}"
