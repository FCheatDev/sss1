# Basic HTML and CSS in Next.js & React.js Framework

## 安裝必要的node.js套件
```
npm install
```

## 啟動開發伺服器
```
npm run dev
```

## 關閉開發伺服器
```
Ctrl + C
```

## 路由配置計畫

- `/` 首頁 
- `/about` 關於我們 
- `/contact` 聯絡我們
- `/faq` 常見問題

## 如何表達一個頁面

- 一個頁面就是一個被放在`app`資料夾下的`page.js`
- 每一個`page.js`都必須是一個React元件

### 一個React元件

```jsx
export default function 頁面元件名稱() {
    return (
        <>
            頁面內容在此表達...
        </>
    )
}
```
