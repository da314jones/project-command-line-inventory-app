# C.R.U.D Inventory App
<br> 

The CRUD (Create, Read, Update, Delete) Inventory App is a command-line application used to manage data. In this particular instance a collection of motion puppets. With this app you are capable of:
<br>
1. <span style="font-size: larger;">**C**</span>reating new puppets
1. <span style="font-size: larger;">**R**</span>etrieving puppet information
1. <span style="font-size: larger;">**U**</span>pdating existing ones
1. <span style="font-size: larger;">**D**</span>eleting puppets
- Calculating the total value of selected puppets.

<br>
<br>

By following the instructions below, you can easily manage your puppet inventory and enjoy the functionalities offered by the app.
___

<br> 
<br> 

## Getting Started
<br> 
Using the CRUD Inventory App:

- `index.js` and `popindex.js,` : 
These two files serve as entry points for running the app.
<br>

- `helpers.js` :
Contains helper functions for reading and writing JSON files.
___

<br>
<br>

### **Populating puppet data**
<br>

- *popindex.js* file allows you to populate the puppet data with randomly generated puppets. To populate the dataset, run the following command to initiate:

```
node popindex.js <dataPopulation>
```
- Replace `<dataPopulation>` with the number of puppets you want to generate. For example:

```
node popindex.js 10
```
<br>

- The specified number of puppets will be randomly generated and added to the inventory.
___
<br> 
<br> 

### **Creating a Motion Puppet**
<br> 

- *create.js file controller*: Creates a new motion puppet and adds it to the inventory.
- To create a new motion puppet, run the following command:

```
node index.js create <puppetName> <puppetPrice>
```
- Replace `<puppetName>` with the desired name of the puppet and `<puppetPrice>` with its price in dollars. For example:

```
node index.js create "Dancing Puppet" 29.99
```
<br>

- The new puppet will be added to the inventory, and its details will be displayed.
___
<br> 
<br> 

### **Deleting a Motion Puppet**
<br> 

- *destroy.js* file controller: Deletes a motion puppet from the inventory based on its ID or name.
- To delete a motion puppet from the inventory, use the following command:

```
node index.js destroy <puppetIdentifier>
```
- Replace `<puppetIdentifier>` with the ID or name of the puppet you want to delete. For example:

```
node index.js destroy ABCD
```
<br>

- If the puppet exists in the inventory, it will be removed, and its details will be displayed.
___
<br> 
<br> 

### **Displaying the Index of a Motion Puppet**
<br> 

- *index.js* file: Displays the index of a motion puppet in the inventory based on its ID or name.
- To find the index of a motion puppet in the inventory, run the following command:

```
node index.js indices <puppetKey>
```
- Replace `<puppetKey>` with the ID or name of the puppet you want to search. For example:

```
node index.js indices ABCD
```
<br>

- The index of the puppet will be displayed if it exists in the inventory.
___
<br> 
<br> 

### **Retrieving Puppet Information**
<br> 

- *show.js file:* Retrieves and displays detailed information about a motion puppet based on its ID or name.
- To retrieve detailed information about a motion puppet, use the following command:

```
node index.js show <puppetKey>
```
- Replace `<puppetKey>` with the ID or name of the puppet you want to retrieve information about. For example:

```
node index.js show ABCD
```
<br>

- If the puppet exists in the inventory, its details will be displayed.
___
<br> 
<br> 

### **Updating a Motion Puppet**
<br> 

- *update.js file:* Updates the information of a motion puppet in the inventory based on its ID.
- To update the information of a motion puppet in the inventory, run the following command:

```
node index.js update <puppetId> <newPuppetName> <newPuppetPrice> <newInStock>
```
- Replace `<puppetId>` with the ID of the puppet you want to update. Provide the new values for `<newPuppetName>`, `<newPuppetPrice>`, and `<newInStock>`. For example:

```
node index.js update ABCD "New Puppet" 39.99 true
```
<br>

- If the puppet exists in the inventory, its information will be updated, and the updated details will be displayed.
___
<br> 
<br> 

### **Calculating the Total Value**
<br> 

- *total.js file:* Calculates the total value of selected puppets based on their IDs or names.
- To calculate the total value of selected puppets, use the following command:

```
node index.js total <puppetIds...>
```
- Replace `<puppetIds...>` with one or more IDs or names of the puppets you want to include in the calculation. Separate multiple IDs or names with spaces. For example:

```
node index.js total ABCD XYZ
```
<br>

- The total value of the selected puppets will be calculated and displayed.
___
<br> 
<br> 
___

### Thank you for choosing the CRUD Inventory App. Enjoy managing your puppets with ease!




