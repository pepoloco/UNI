const content = document.getElementById("content");

const pages = {
  text: `
    <h1>Text with colours</h1>
    <p> <span style="color: red;">Lorem Ipsum</span><span style="color:green;"> is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </span>
    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of<span style="background-color: yellow; font-size: 30pt; font-family: Arial; text-align: right;">
  Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</span>
    </div>
  `,
  lists: `
    <h1>List</h1>
    <h2>Ordered list</h2>
    <ol>
      <li>Test</li>
      <li>Test1</li>
        <li>Test1</li>
        
    </ol>
    <h2>Unordered List</h2>
    <ul>
      <li>Test1</li>
      <li>Test2</li>
      <li>Test3</li>
    </ul>
    <h2>Mixed</h2>
    <ol>
    <li>Test1</li>
    <ul>
    <li>Test2</li>
    </ul>
    </ol>
  `,
  images: `
    <h1>Image</h1>
    <img src="https://uft-plovdiv.bg/wp-content/uploads/2025/04/UFT_picture_river.jpg" alt="LOLO">
    <img src="https://scienwork.uft-plovdiv.bg/library/2022/07/Logo-Rotate.gif" width="200" height="90" alt="UHT GIF" align="left" vspace="10" hspace="80" /> 
  `,
tables: `
  <h1 style="font-family: Arial; color: navy;">Tables</h1>
  <table border="1" cellpadding="10" cellspacing="0" style="background-color:rgb(129, 128, 128); font-family: Arial; text-align: center;">
    <tr style="background-color: yellow;">
      <th align="center" valign="middle">#</th>
      <th align="center" valign="middle">Name</th>
      <th align="center" valign="middle">Grade</th>
      <th align="center" valign="middle">Status</th>
    </tr>
    <tr>
      <td align="center">1</td>
      <td align="left">Pepo</td>
      <td align="center"><span style="background-color: red; color: white;">2.99</span></td>
      <td align="center" style="color: red;">Fail</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td align="left">Ana</td>
      <td align="center"><span style="background-color: lightgreen;">6.00</span></td>
      <td align="center" style="color: green;">Pass</td>
    </tr>
  </table>
`,
links: `
  <h1>Hyperlinks</h1>
  <p> <a href="https://uft-plovdiv.bg" target="_blank" rel="noopener noreferrer">
      Click me
    </a></p>
`,
 forms: `
  <h1 style="font-family: Arial; color: navy;">Forms</h1>
  <form style="font-family: Arial; line-height: 2;">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email"><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your pw"><br><br>

    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>

    <label for="bio">Bio:</label><br>
    <textarea id="bio" name="bio" rows="4" cols="40" placeholder="Enter something..."></textarea><br><br>

    <label for="colorOfEyes">Eye color:</label>
    <select id="car" name="car">
      <option value="">Choose</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Brown">Brownn</option>
    </select><br><br>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Save</button>
  </form>
`,
};

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;
    content.innerHTML = pages[page] || "<no content</p>";
  });
});
