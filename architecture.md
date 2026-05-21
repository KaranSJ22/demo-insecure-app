# Architecture Security Map

**Generated:** 5/21/2026, 12:16:18 PM
**Services:** 5
**Risks Found:** 2

## Service Dependency Graph

```mermaid
graph TD
    api-gateway["api-gateway\nports: 3000:3000"]
    auth-worker["auth-worker"]
    cache["cache"]
    legacy-cache["legacy-cache"]
    postgres-db["postgres-db\nports: 5432:5432"]

    api-gateway --> auth-worker
    api-gateway --> cache
    api-gateway --> postgres-db
    auth-worker --> postgres-db

    classDef danger fill:#ffcccc,stroke:#ff0000,stroke-width:2px,color:#990000
    class legacy-cache,postgres-db danger
```

## Risk Summary

| Service | Severity | Finding |
|---------|----------|---------|
| legacy-cache | LOW | Service "legacy-cache" has no connections to or from any other service. This may indicate dead code or a misconfigured dependency graph. |
| postgres-db | HIGH | Internal database "postgres-db" exposes port(s) [5432:5432] to the host network. This allows direct external access to the data store, bypassing all application-layer security. |
