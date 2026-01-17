from pydantic import BaseModel

class RepoRequest(BaseModel):
    github_repo: str
