FROM node:21.1.0

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y python3 python3-pip python3-venv && ln -s /usr/bin/python3 /usr/bin/python

RUN python -m venv /opt/venv

ENV PATH="/opt/venv/bin:$PATH"

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6500

CMD ["node", "app.js"]