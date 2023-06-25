# CRUD Inventory App

## The CRUD (Create, Read, Update, Delete) Inventory App is a command-line application designed to manage a collection of motion puppets. This app allows you to perform various actions such as creating new puppets, updating existing ones, retrieving puppet information, deleting puppets, and calculating the total value of selected puppets.

## Getting Started
To use the CRUD Inventory App, follow the instructions below:

## Prerequisites
Node.js installed on your machine (version 14.0.0 or higher)
Installation
Clone the repository to your local machine:


git clone <repository_url>
Navigate to the project directory:


cd crud-inventory-app
Install the required dependencies:


npm install
Usage
The app consists of several JavaScript files located in the src folder. Here's a brief overview of each file's purpose:

### create.js: 
Creates a new motion puppet and adds it to the inventory.
### destroy.js: 
Deletes a motion puppet from the inventory based on its ID or name.
### helpers.js
Contains helper functions for reading and writing JSON files.
### indices.js: 
Displays the index of a motion puppet in the inventory based on its ID or name.
### show.js: 
Retrieves and displays detailed information about a motion puppet based on its ID or name.
### total.js: 
Calculates the total value of selected puppets based on their IDs or names.
### update.js: 
Updates the information of a motion puppet in the inventory based on its ID.

There are also two additional files, index.js and popindex.js, located on the same level as the src folder. These files serve as entry points for running the app.

## Populating Puppet Data
The popindex.js file allows you to populate the puppet data with randomly generated puppets. To populate the data, run the following command:


node popindex.js <dataPopulation>
Replace <dataPopulation> with the number of puppets you want to generate. For example:


node popindex.js 10
The specified number of puppets will be randomly generated and added to the inventory.

## Creating a Motion Puppet
To create a new motion puppet, run the following command:


node index.js create <puppetName> <puppetPrice>
Replace <puppetName> with the desired name of the puppet and <puppetPrice> with its price in dollars. For example:


node index.js create "Dancing Puppet" 29.99
The new puppet will be added to the inventory, and its details will be displayed.

## Deleting a Motion Puppet
To delete a motion puppet from the inventory, use the following command:


node index.js destroy <puppetIdentifier>
Replace <puppetIdentifier> with the ID or name of the puppet you want to delete. For example:


node index.js destroy ABCD
If the puppet exists in the inventory, it will be removed, and its details will be displayed.

## Displaying the Index of a Motion Puppet
To find the index of a motion puppet in the inventory, run the following command:


node index.js indices <puppetKey>
Replace <puppetKey> with the ID or name of the puppet you want to search. For example:


node index.js indices ABCD
The index of the puppet will be displayed if it exists in the inventory.

## Retrieving Puppet Information
To retrieve detailed information about a motion puppet, use the following command:


node index.js show <puppetKey>
Replace <puppetKey> with the ID or name of the puppet you want to retrieve information about. For example:


node index.js show ABCD
If the puppet exists in the inventory, its details will be displayed.

## Updating a Motion Puppet
To update the information of a motion puppet in the inventory, run the following command:


node index.js update <puppetId> <newPuppetName> <newPuppetPrice> <newInStock>
Replace <puppetId> with the ID of the puppet you want to update. Provide the new values for <newPuppetName>, <newPuppetPrice>, and <newInStock>. For example:


node index.js update ABCD "New Puppet" 39.99 true
If the puppet exists in the inventory, its information will be updated, and the updated details will be displayed.

## Calculating the Total Value
To calculate the total value of selected puppets, use the following command:

node index.js total <puppetIds...>
Replace <puppetIds...> with one or more IDs or names of the puppets you want to include in the calculation. Separate multiple IDs or names with spaces. For example:


node index.js total ABCD XYZ
The total value of the selected puppets will be calculated and displayed.

Conclusion
The CRUD Inventory App provides a convenient way to manage a collection of motion puppets. By following the instructions above, you can perform various actions such as creating, updating, retrieving, and deleting puppets, as well as calculating the total value of selected puppets. Enjoy using the app!