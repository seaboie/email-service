# learn-clasp  

## Usage  

### Clone an existing project  

> clone to `src` directory

```bash
 clasp clone <scriptId> --rootDir ./src
```  

#### Login credential  
```bash
clasp login --creds creds.json
```  

> ? What is your GCP projectId?  
 
- paste your project ID in Terminal
> `clasp-project-111111`

### Create a new Apps Script Project  

> clone to `src` directory

```bash
clasp create --title <project-name> --rootDir ./src
```  
---  

## Description  
This is a learn-clasp project. Use TypeScript    


### [On Youtube](https://www.youtube.com/watch?v=CLGUsqHGqrw&t=121s)  

---  
## Custom Script  
`npm run logs`  
```bash
 "logs": "clasp logs --simplified --watch | sed -E 's/^([A-Z]+).*\"message\":\"([^\"]+)\".*/\\1 - \\2/'"
 ```  
