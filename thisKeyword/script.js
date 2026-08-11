let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  nextId: 1,

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },

  addUser: function () {
    this.users.push({
      userId: this.nextId++,
      userName: userName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    this.renderUi();
    form.reset();
  },

  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.userName;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Button
      const btn = document.createElement("button");
      btn.className =
        "bg-white hover:bg-gray-200 text-gray-800 font-semibold mt-4 py-2 px-4 border border-gray-400 rounded shadow";
      btn.textContent = "Remove";
      card.appendChild(btn);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
    });
  },

  removeUser: function () {
    btn.addEventListener
  },
};

userManager.init();
