import fastapi
from aux import Request

app = fastapi.FastAPI()

@app.get("/")
async def root():
    return {"message": "landing page"}


@app.post("/request")
async def request(request: Request):
    return {"message": "request received", "request": request.dict()}



app.run()
