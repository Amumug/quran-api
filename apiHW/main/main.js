document.querySelector('button').addEventListener('click', fetchLanguages);

function fetchLanguages() {
  let language = document.querySelector('input').value.toLowerCase(); // Convert input to lowercase for case-insensitive matching

  fetch(`https://api.quran.com/api/v4/resources/languages`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const matchingLanguages = data.languages.filter((lang) => lang.name.toLowerCase() === language);

      if (matchingLanguages.length > 0) {
        console.log(matchingLanguages);

        // Clear previous results
        document.querySelector('h2').innerText = '';
        document.querySelector('h3').innerText = '';

        // Remove the error message
        document.querySelector('h4').innerText = '';

        // Display information for all matching languages
        matchingLanguages.forEach((selectedLanguage, index) => {
          const h2 = document.createElement('h2');
          h2.innerText = selectedLanguage.native_name;
          document.querySelector('h2').appendChild(h2);

          const h3 = document.createElement('h3');
          h3.innerText = selectedLanguage.translations_count;
          document.querySelector('h3').appendChild(h3);

          // Separate each result with a line break, except for the last one
          if (index < matchingLanguages.length - 1) {
            document.querySelector('h2').appendChild(document.createElement('br'));
            document.querySelector('h3').appendChild(document.createElement('br'));
          }
        });
      } else {
        // Display the error message
        document.querySelector('h4').innerText = 'The language you entered was not found!!!!';

        // Clear previous results
        document.querySelector('h2').innerText = '';
        document.querySelector('h3').innerText = '';
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
