# HANDOFF template

Use repository coordinates instead of attaching or copying files between agents.

```yaml
repository: <owner/repository>
branch: <working branch>
head_sha: <40-character SHA>
accepted_documents:
  - <canonical ID and repository-relative path>
active_tasks:
  - <task ID and repository-relative path>
open_decisions:
  - <decision ID or explicit none>
known_risks:
  - <risk or explicit none>
next_action: <one concrete next action and owner>
```

Before handoff, confirm that the branch is pushed and that every listed path is
present at `head_sha` on GitHub.
