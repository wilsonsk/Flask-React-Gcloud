## This is project aims at establishing a template that most closely resembles the industry standard in regards to configuring the stack and the application of Webpack and modularization (such as CSS modules) to take advantage of the single page nature of Reactjs as intended. 

## A skeleton for building Python applications on Google App Engine with [Flask](http://flask.pocoo.org), [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/).

## Run Locally
1. Install the [App Engine Python SDK](https://developers.google.com/appengine/downloads).
You'll need python 2.7 and [pip 1.4 or later](http://www.pip-installer.org/en/latest/installing.html) installed too.

2. Clone this repo with

   ```
	https://github.com/wilsonsk/Flask_React_Gcloud.git
   ```
3. Install Python dependencies in the project's lib directory and install Node dev dependencies.
   Note: App Engine can only import libraries from inside your project directory.

   ```
   cd Flask_React_Gcloud
   pip install -r requirements.txt -t lib
   npm install
   ```
   
4. React-Dom and React create local modules (instead of using CDN) 
   ```
   npm install --save react react-dom
   npm install --save prop-types
   ```
5. Webpack parts and merge for a degree of abstraction, you can define webpack.config.js for higher level configuration and webpack.parts.js for configuration parts to consume
   ```
   npm install webpack-merge --save-dev
   ```
6. CSS Loader and Style-loader enables CSS updating without full browser refresh
   ```
   npm install css-loader style-loader --save-dev
   ```
7. Webpack --watch enables automatic updating of the webpack output file to bypass manual invocation
   ```
   webpack --watch
   hit ctrl-c after
   ```
   
8. Run local server from the command line:

   ```
   dev_appserver.py .
   ```
   Visit the application [http://localhost:8080](http://localhost:8080)

   or

   ```
   python main.py
   ```
   And visit the application on [http://localhost:5000](http://localhost:5000)


See [the development server documentation](https://developers.google.com/appengine/docs/python/tools/devserver)
for options when running dev_appserver.

## Deploy
To deploy the application:

1. Use the [Admin Console](https://appengine.google.com) to create a
   project/app id. (App id and project id are identical)
1. [Deploy the
   application](https://developers.google.com/appengine/docs/python/tools/uploadinganapp) with

   ```
   gcloud app deploy
   ```
1. Congratulations!  Your application is now live at your-app-id.appspot.com

### Relational Databases and Datastore
To add persistence to your models, use
[NDB](https://developers.google.com/appengine/docs/python/ndb/) for
scale.  Consider
[CloudSQL](https://developers.google.com/appengine/docs/python/cloud-sql)
if you need a relational database.

### Installing Libraries
See the [Third party
libraries](https://developers.google.com/appengine/docs/python/tools/libraries27)
page for libraries that are already included in the SDK.  To include SDK
libraries, add them in your app.yaml file. Other than libraries included in
the SDK, only pure python libraries may be added to an App Engine project.


