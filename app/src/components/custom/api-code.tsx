import { CodeSnippet } from "@/components/application/code-snippet/code-snippet";
const codeDefault = `import axios from 'axios';

const response = await axios.post('https://api.emailhawk.com/verify', {
  email: 'test@example.com'
}, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});`;

export const APICode = () => <CodeSnippet code={codeDefault} language="ts" className="relative w-full" />;
