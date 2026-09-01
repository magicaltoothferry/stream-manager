# Stream Manager — Android builds

Signed APKs for Stream Manager. Everything needed to install lives in this
repository.

## Installing

Open this page on the device:

https://magicaltoothferry.github.io/stream-manager/

It forwards to the current build. Android will say installing from this source
is not allowed — that is normal for an app outside the Play Store. Choose
**Settings**, turn on **Allow from this source**, go back, and tap **Install**.

On Fire TV / Android TV the same page is reachable from the Downloader app,
which takes a short numeric code instead of a URL.

## What is here

- `stream-manager-<version>.apk` on the main branch — the version-stamped copy,
  for browser installs. The version in the *filename* is load-bearing: Android
  saves a repeated filename as `stream-manager-1.apk` and leaves the OLD file
  holding the obvious name, so people reinstall an ancient build and see nothing
  change.
- The release asset `stream-manager.apk` — fixed name, no version. That is what
  keeps `releases/latest/download/stream-manager.apk` permanent across every
  release, and it is where the landing page above forwards. Never rename it.

## Publishing a build

1. Commit `stream-manager-<version>.apk` to `main`.
2. Publish release `v<version>` with the APK attached as `stream-manager.apk`.

The landing page needs no edit — GitHub re-points `/releases/latest/` by itself.

Old versions stay. They cost nothing and they are the only rollback path.
