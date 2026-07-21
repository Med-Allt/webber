#!/usr/bin/env bash
# Resolves General Sans woff2 URLs from the Fontshare CSS endpoint and downloads
# them to app/fonts/. URLs are content hashes and rotate, so never hardcode them.
set -euo pipefail

DEST="app/fonts"
API='https://api.fontshare.com/v2/css?f%5B%5D=general-sans@400,500,600&display=swap'
mkdir -p "$DEST"

CSS=$(curl -sfL "$API" -A "Mozilla/5.0")

# The endpoint returns @font-face blocks ordered 400, 500, 600.
i=0
for weight in 400 500 600; do
  i=$((i + 1))
  url=$(printf '%s' "$CSS" | grep -o "//cdn\.fontshare\.com/[^']*\.woff2" | sed -n "${i}p")
  if [ -z "$url" ]; then
    echo "Could not resolve woff2 URL for weight $weight" >&2
    exit 1
  fi
  curl -sfL "https:$url" -o "$DEST/GeneralSans-$weight.woff2"
  echo "Downloaded $DEST/GeneralSans-$weight.woff2"
done
