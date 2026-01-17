from utils.repo_loader import load_repo

# import YOUR agents
from agents.bug_agent import find_bugs
from agents.duplication_agent import find_duplication
from agents.simplify_agent import simplify_code


def run_pipeline(repo_url: str):
    repo_path = load_repo(repo_url)

    # --- Agent executions ---
    bugs = find_bugs(repo_path)
    duplication = find_duplication(repo_path)
    simplifications = simplify_code(repo_path)

    # --- Aggregate result ---
    return {
        "status": "success",
        "repo": repo_url,
        "results": {
            "bugs": bugs,
            "duplication": duplication,
            "simplification": simplifications
        }
    }
