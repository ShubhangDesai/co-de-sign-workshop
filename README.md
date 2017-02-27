# co-de-sign-workshop
Starter code for AngularJS dev workshop at Stanford, Winter 2017.

# Getting started
## Install npm
Follow the instructions to install npm onto your machine at this site: https://www.npmjs.com/package/download
## Install git
Follow the instructions to install git onto your machine at this site: https://git-scm.com/downloads
## Clone this repo
In terminal, navigate to your desired directory and issue the following command:

```
git clone https://github.com/ShubhangDesai/co-de-sign-workshop.git
```
## Install npm packages
From the same terminal window, issue the following commands:

```
cd co-de-sign-workshop
npm install
```
# Component usage
## Card
A Material Design card. Use this as a beautiful way to present some short information. Based off of Google's Material Design specs: https://material.io/guidelines/components/cards.html.
```
<card title="{{cardTitle}}" content="{{cardContent}}" image="{{image}}"></card>
```
`title`: A string which will be displayed as the title of the card.

`content`: A string which will be displayed as the content of the card.

`image` (optional): A relative path to an image which will be displayed in the card.
## Hero image
An image which covers the entire viewport. Intended as the first element the user sees, so as to draw them in. An example can be seen here: http://www.fireworx.com/.
```
<hero text="{{heroText}}" image="{{heroImage}}"></hero>
```
`text`: A string which will be displayed as the text on the hero image.

`image`: A relative path to an image which will be the hero image.
## Jumbotron
A rectangle of text with a very heavy title. Can be used to very effectively emphasize a point. Based off of Twitter's Bootstrap Jumbotron: https://v4-alpha.getbootstrap.com/components/jumbotron/.
```
<jumbotron title="{{jumbotronTitle}}" content="{{jumbotronContent}}"></jumbotron>
```
`title`: A string which will be displayed as the title of the jumbotron.

`content`: A string which will be displayed as the content of the jumbotron.
## Third
An element which can be put in a row with two other similar elements, making a row of three. Uses the Rule of Thirds to convey short points in an appealing manner. An example can be found here: https://www.orestis.nl/.
```
<third title="{{thirdTitle}}" content="{{thirdContent}}" image="{{thirdImage}}"></third>
```
`title`: A string which will be displayed as the title of the third element.

`content`: A string which will be displayed as the content of the third element.

`image` (optional): A relative path to an image which will be displayed as the element's icon.
## Toolbar
A toolbar, fixed at the top of the screen. Use this to provide navigation for your users.
```
<toolbar header="{{toolbarHeader}}" links="toolbarLinks"></toolbar>
```
`header`: A string which will be displayed as the header of the toolbar.

`links`: A JavaScript array of Objects representing each toolbar item. Each Object must have the properties:

⋅⋅⋅`url`: The link which is navigated to when the item is clicked.

⋅⋅⋅`name`: The name that is displayed on the item.
