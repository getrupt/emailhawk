import { CodeSnippet } from "@/components/application/code-snippet/code-snippet";
import { ButtonGroup, ButtonGroupItem } from "../base/button-group/button-group";
import { useState } from "react";
const codeJavaScript = `import axios from 'axios';

const response = await axios.post('https://api.emailhawk.dev/verify', {
  email: 'test@example.com'
}, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});`;

const codePython = `import requests

response = requests.post('https://api.emailhawk.dev/verify', json={
  'email': 'test@example.com'
}, headers={
  'Authorization': 'Bearer YOUR_API_KEY'
});`;

const codePHP = `<?php
$response = requests.post('https://api.emailhawk.dev/verify', json={
  'email': 'test@example.com'
}, headers={
  'Authorization': 'Bearer YOUR_API_KEY'
});
?>`;

export const APICode = () => {
  const [language, setLanguage] = useState("javascript");
  const code = language === "javascript" ? codeJavaScript : language === "python" ? codePython : language === "php" ? codePHP : "";

  return (
    <div className="relative flex flex-col gap-4 border rounded-xl border-secondary bg-primary px-4 py-5 md:px-6 w-full">
      <div className="flex flex-row gap-0.5">
        <div className="flex flex-1 items-center gap-2">
          <h2 className="text-lg font-semibold text-primary">API Code</h2>
        </div>
        <div className="flex flex-row gap-0.5">
          <ButtonGroup selectedKeys={[]}>
            <ButtonGroupItem isDisabled={language === "javascript"} id="javascript" onClick={() => setLanguage("javascript")}>JavaScript</ButtonGroupItem>
            <ButtonGroupItem isDisabled={language === "python"} id="python" onClick={() => setLanguage("python")}>Python</ButtonGroupItem>
            <ButtonGroupItem isDisabled={language === "php"} id="php" onClick={() => setLanguage("php")}>PHP</ButtonGroupItem>
          </ButtonGroup>
        </div>
      </div>
      <CodeSnippet
        code={code}
        language="ts"
        className="relative w-full"
      />
    </div>
  );
};
