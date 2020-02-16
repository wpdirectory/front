# WPDirectory Frontend

React based frontend for [WPDirectory](https://www.wpdirectory.net/).

## Development

You can setup the development environment and run it locally with:

```bash
yarn install
yarn start
```

## Deployment

We deploy to an AWS S3 bucket, using the command:

```bash
aws s3 sync s3://wpdirectory . --delete
```
