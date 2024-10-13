from fastapi.staticfiles import StaticFiles
from typing import Any
import fastapi
from fastapi import Body
from aux import Request
import json
from embedchain import App
from starlette.responses import FileResponse

embedchain = App()

app = fastapi.FastAPI()
app.mount('/static', StaticFiles(directory="/app/ui/build/static"), name='static')

@app.get("/static")
async def root():
    print("request made to static")
    return  FileResponse("/app/ui/build/index.html")

@app.post('/embedpdf')
async def embedpdf(request: Any = Body(None)):
    request = json.loads(request)
    print(request)
    embedchain.add(request['text'], data_type='pdf_file')

@app.post('/embedwebsite')
async def embedwebsite(request: Any = Body(None)):
    request = json.loads(request)
    embedchain.add(request['text'])

@app.post("/request")
async def request(request: Any = Body(None)):
    request = json.loads(request)
    print(request)
    response = embedchain.query(request['text'], citations=True)
    return response
