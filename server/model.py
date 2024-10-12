from transformers import pipeline

class LLM:
    def __init__(self, model_path):
        self.generator = pipeline('text-generation', model=model_path)

    def generate(self, text):
        return self.generator(text)
