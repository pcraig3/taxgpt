<div align="center">
  <img alt="Logo" src="./public/android-chrome-192x192.png" width="100" />
  <h1>TaxGPT</h1>
  <p><em>Canada’s AI tax chatbot.</em></p>
</div>

<br />

This is a tiny little [Next.js](https://expressjs.com/) app to help Canadians find relevant options to file their taxes for free, and ask general questions about taxes in Canada.

- **TaxGPT is not sponsored by any company, it’s a 100% free service with no affiliations.**
- TaxGPT is also **not a Government of Canada service**.
- I used [Typebot](https://typebot.io) for the chatbot interaction.
- The adorable [Canadian maple leaf mascot](https://github.com/pcraig3/tax-gpt/blob/main/public/android-chrome-512x512.png) is [Tyler Benning](https://www.tylerbenning.com)’s.

Check it out @ [taxgpt.ca](https://taxgpt.ca/) 🤑

## Getting started

### [Install `npm`](https://www.npmjs.com/get-npm)

`npm` is a javascript package manager. It downloads project dependencies and runs node applications.

You'll need node version `v12` or higher to run the app.

### [Install `docker`](https://docs.docker.com/install/)

A docker container allows a developer to package up an application and all of its parts. This means we can build an app in any language, in any stack, and then run it anywhere — whether locally or on a server.

## Environment variables

There are 3 env vars you should know about. All are technically optional.

- `TYPEBOT_ID`: This is the URL slug for Typebot. If you don’t have one, the chat window will be empty.
- `ANALYTICS_ID`: This is your Google analytics ID. Very optional.
- `GITHUB_SHA`: This is the app version, basically. Also very optional.

## Build and run with npm

```bash
# install dependencies
npm install

# run application in 'dev' mode
# (ie, the server restarts when you save a file)
npm run dev

# run application in 'prod' mode
npm start
```

The app should be running at [http://localhost:3000/](http://localhost:3000/).

On a Mac, press `Control` + `C` to quit the running application.

### Run tests with npm

```bash
# run unit tests
npm test

# run linting
npm run lint
```

## Build and run as a Docker container

```bash
# build an image locally
docker build -t pcraig3/vacs:<tag> --build-arg GITHUB_SHA_ARG=<tag> --build-arg TYPEBOT_ID_ARG=123 --build-arg TANALYTICS_ID_ARG=123 .

# run the container
docker run -it -p 3000:3000 pcraig3/vacs:<tag>
```

The container should be running at [http://localhost:3000/](http://localhost:3000/).

On a Mac, press `Control` + `C` to quit the running docker container.

## Deploy to Cloud Run

Obviously you can't push your stuff to _my_ Cloud Run, but if somehow you were interested in putting up a copycat version, these steps will work.

```bash
# build and upload a container
gcloud builds submit --tag gcr.io/tax-gpt/tax-gpt:<tag>

# deploy container to Cloud Run
gcloud run deploy --image gcr.io/tax-gpt/tax-gpt:<tag> --platform managed
```

### Building for Cloud Run

Note that if you have an M1 Mac, you need to build for the `linux/amd` platform otherwise you will spend 3 hours barking up the wrong tree trying to debug the `PORT` environment variable.

```bash
# build an image locally for the linux/amd platform
docker buildx build --platform linux/amd64 -t pcraig3/vacs:<tag> --build-arg GITHUB_SHA_ARG=<tag> --build-arg TYPEBOT_ID_ARG=123 --build-arg TANALYTICS_ID_ARG=123 .
```
