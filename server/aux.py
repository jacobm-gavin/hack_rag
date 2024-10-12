from pydantic import BaseModel

class Request(BaseModel):
    text: str
    documentID: int
    temperature: float | None = None
    max_tokens: int | None = None
