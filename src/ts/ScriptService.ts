namespace ScriptService {
    export interface ScriptProperties {
      key: string;
      value: string;
    }
  
    // Function to get a script property
    export function getScriptProperty(key: string): string {
      const scriptProperties = PropertiesService.getScriptProperties();
      return scriptProperties.getProperty(key);
    }
  
    // Function to set a script property
    export function setScriptProperty(params: ScriptProperties): void {
      const { key, value } = params;
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.setProperty(key, value);
    }
  
    // Function to delete a script property
    export function deleteScriptProperty(key: string): void {
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.deleteProperty(key);
    }
  
    // Function to get all script properties
    export function getAllScriptProperties(): { [key: string]: string } {
      const scriptProperties = PropertiesService.getScriptProperties();
      return scriptProperties.getProperties();
    }
  
    // Function to set multiple script properties
    export function setMultipleScriptProperties(properties: { [key: string]: string }): void {
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.setProperties(properties);
    }
  
    // Function to delete all script properties
    export function deleteAllScriptProperties(): void {
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.deleteAllProperties();
    }
  }
  