FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY app ./app
ENV FLASK_APP=app
ENV FLASK_ENV=development
CMD ["flask", "run", "--host=0.0.0.0"]
