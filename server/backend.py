import fastapi
from aux import Request
from embedchain import App
embedchain = App()

app = fastapi.FastAPI()

@app.get("/")
async def root():
    return {"message": "landing page"}

@app.post('/embedpdf')
async def embedpdf(request: Request):
    embedchain.add(request.text, data_type='pdf_file')

@app.post('/embedwebsite')
async def embedwebsite(request: Request):
    embedchain.add(request.text)

@app.post("/request")
async def request(request: Request):
    response = embedchain.query(request.text, citations=True)
    return response
