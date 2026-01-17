from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import RepoRequest
from driver import run_pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/trigger")
def trigger_pipeline(data: RepoRequest):
    return run_pipeline(data.github_repo)
