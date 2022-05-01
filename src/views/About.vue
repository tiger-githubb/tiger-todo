<template>
  <div class="about pa-6">
    <h1>A Propos de Tiger To Do List</h1>

    <p>
      <strong>Tiger To Do List</strong> est une application de gestion de tâches.
      <br />Elle permet de: <br />-créer des tâches <br />-modifier des tâches
      <br />-definir la fin de la tâche <br />-supprimer des tâches <br />-de les classer
      par priorité et de les trier par date.
    </p>

    <p>
      <strong>Tiger To Do List</strong> est un projet en cours de production du
      developpeur <br /><strong>Aristide KARBOU </strong> afin d'ameliorer ses competences
      en developpement d'application web avec la techno <strong> VUE.Js</strong> .
    </p>

    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label
          >Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    <p>
      <strong>Github : Tiger-githubb</strong>
    </p>
  </div>
</template>
