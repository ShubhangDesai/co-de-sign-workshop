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
cd co-de-sign
npm install
```
# Component usage
## Card
```
<card title="{{cardTitle}}" content="{{cardContent}}" image="{{image}}"></card>
```
`title`: A string which will be displayed as the title of the card.

`content`: A string which will be displayed as the content of the card.

`image` (optional): A relative path to an image which will be displayed in the card.
## Hero image
```
<hero text="{{heroText}}" image="{{heroImage}}"></hero>
```
`text`: A string which will be displayed as the text on the hero image.

`image`: A relative path to an image which will be the hero image.
## Jumbotron
```
<jumbotron title="{{jumbotronTitle}}" content="{{jumbotronContent}}"></jumbotron>
```
`title`: A string which will be displayed as the title of the jumbotron.

`content`: A string which will be displayed as the content of the jumbotron.
## Third
```
<third title="{{thirdTitle}}" content="{{thirdContent}}" image="{{thirdImage}}"></third>
```
`title`: A string which will be displayed as the title of the third element.

`content`: A string which will be displayed as the content of the third element.

`image` (optional): A relative path to an image which will be displayed as the element's icon.
## Toolbar
```
<toolbar header="{{toolbarHeader}}" links="toolbarLinks"></toolbar>
```
`header`: A string which will be displayed as the header of the toolbar.

`links`: A JavaScript array of Objects representing each toolbar item. Each Object must have the properties:

⋅⋅⋅`url`: The link which is navigated to when the item is clicked.

⋅⋅⋅`name`: The name that is displayed on the item.
