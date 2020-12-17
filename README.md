# Guide

## Cloning and serving locally

### Clone the repo

```bash
git clone https://github.com/lucsh/client-challenge.git
```

### Install dependencies

```bash
cd client-challenge
yarn
```

### Create a .env file

```bash
cp example.env .env
```

### Run

```bash
yarn start
```

## Testing

```bash
yarn start-dev
```

in another terminal

```bash
yarn cypress
```

## Building and Using the docker image

### Build the image

`docker build -f infrastructure/Dockerfile -t challenge-client:latest .`

### Running the image

`docker run --name challenge-client -p 3000:80 -d challenge-client:latest`
