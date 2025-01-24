# learn-clasp  

## Usage  
> Set environment for locally
- import `creds.json`  
- run command  
for connect with server on browser
```bash
clasp login --creds creds.json
```  
- Authorized  
```bash
clasp pull
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
