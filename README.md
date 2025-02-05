# Test Source Project

A sample React/TypeScript project used to test the [AI Code Review Agent](https://github.com/dipeshsingh2012/code-review-agent).

## How it works

When a Pull Request is opened or updated in this repo, a GitHub webhook triggers the Code Review Agent (hosted on GCP Cloud Function), which analyzes the changed files and posts review comments back on the PR.

## Setup webhook

1. Deploy the code-review-agent Cloud Function and note the URL
2. Go to this repo → Settings → Webhooks → Add webhook
3. **Payload URL**: `https://REGION-PROJECT.cloudfunctions.net/code-review-agent`
4. **Content type**: `application/json`
5. **Events**: Select "Pull requests"
6. Click "Add webhook"
