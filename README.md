<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy a web app with a Turso database and Drizzle ORM on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the Turso and Drizzle ORM example application

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.

This repository contains is designed to show how to deploy a web app build with a Turso database and Drizzle ORM to Koyeb.  You can follow the [associated tutorial](https://www.koyeb.com/tutorials/build-and-run-a-web-app-using-turso-drizzle-orm-and-express-on-koyeb) to learn more about the components and how they fit together

## Getting Started

Follow the steps below to deploy and run the Turso and Drizzle web app to your Koyeb account.

### Requirements

To use this repository, you need:

* A Koyeb account: to build and run the web app.  If you don't already have an account, you can [sign-up for free](https://app.koyeb.com/auth/signup).
* A [Turso account](https://turso.tech/): To store the application data and persist state across deployments.

### Deploy using the Koyeb button

The fastest way to deploy the Turso and Drizzle web app is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=drizzle-turso-todo-app&type=git&repository=koyeb/example-turso-drizzle&branch=main&env[PORT]=8000&env[DATABASE_URL]=REPLACE_ME&env[DATABASE_AUTH_TOKEN]=REPLACE_ME)

Clicking on this button brings you to the Koyeb App creation page with most of the settings pre-configured to launch this application.  You will need to replace the values for the following variables:

* `DATABASE_URL`: Set to the connection string for your Turso database.
* `DATABASE_AUTH_TOKEN`: Set to the authentication token string generated for your Turso database.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

### Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.  Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](https://app.koyeb.com/), on the **Overview** tab, click the **Create Web Service** button to begin.

1. Select **GitHub** as the deployment method.
2. Choose the repository containing your application code.
3. In the **Environment variables** section, click the **Add Variable** button to fill in the environment variables outlined above.
4. Choose a name for your App and Service, for example `example-turso-drizzle`, and click **Deploy**.

The repository will be cloned and the web application will be built and deployed to Koyeb.  You can follow the build process as the repository is cloned, built, and deployed.  Once the deployment is complete, it will be accessible using the Koyeb subdomain for your service.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](//github.com/koyeb/example-turso-drizzle/issues) or fork this repository and open a [pull request](//github.com/koyeb/example-turso-drizzle/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)
