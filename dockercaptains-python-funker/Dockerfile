FROM resin/rpi-raspbian
RUN apt-get update -qqy && apt-get install python python-pip

RUN pip install funker requests
COPY handler.py .
COPY sampleresponse.json .
ENTRYPOINT []
EXPOSE 9999
CMD ["python", "./handler.py"]
