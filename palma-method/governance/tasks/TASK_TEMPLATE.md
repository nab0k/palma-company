# TASK template

Copy this file to an authorized task path and replace every placeholder. A task
must exist before work begins.

```yaml
task_id: TASK_<AGENT>_<NNNN>
agent: <agent-or-owner>
objective: <one concrete outcome>
base_branch: <branch>
base_commit_sha: <40-character SHA>
working_branch: <task branch; never main>
input_paths:
  - <repository-relative path>
output_paths:
  - <repository-relative path>
allowed_changes:
  - <explicitly permitted change>
forbidden_changes:
  - <explicitly prohibited change>
acceptance_criteria:
  - <observable pass condition>
completion_report: <repository-relative report path>
final_commit_sha: <pending until delivery>
```

The completion report must list the base branch, exact files changed,
validation performed, editorial decisions required, unresolved risks, and
confirmation that protected files were untouched.
