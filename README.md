# Angular套件開發練習

要在 Angular 18 中建立可供其他專案引用的套件（例如包含加、減、乘、除運算方法），並將這些專案存放在私人 GitHub 儲存庫中，您可以按照以下步驟進行：

## 1. 建立 Angular 套件專案：

#### - 使用 Angular CLI 創建新的工作區，並指定為庫模式：
```bash
ng new my-math-lib --create-application=false
```

#### - 進入專案目錄，並生成新的庫：
```bash
cd my-math-lib
ng generate library math
```

#### - 這將在 projects/math 目錄下創建庫的結構。

## 2. 實現運算方法：

#### - 在 projects/math/src/lib/ 目錄下，編輯或新增 TypeScript 檔案，實現加、減、乘、除等運算方法。
#### - 確保在 public-api.ts 中導出這些方法，以便它們可供外部使用。

## 3. 建置庫：

#### - 在專案根目錄下，執行以下命令以建置庫：
```bash
ng build math
```

#### - 建置完成後，輸出將位於 dist/math/ 目錄中。

## 4. 將庫上傳至私人 GitHub 儲存庫：

#### - 在 GitHub 上創建一個新的私人儲存庫，例如 my-math-lib。
#### - 在本地專案中，初始化 Git 並連接到該儲存庫：
```bash
git init
git remote add origin https://github.com/your-username/my-math-lib.git
```

#### - 提交並推送代碼：
```bash
git add .
git commit -m "Initial commit"
git push -u origin master
```

## 5. 在另一個 Angular 專案中引用庫：