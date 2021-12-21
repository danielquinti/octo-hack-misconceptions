
# Misconceptions

Entry for the [Festive Tech Calendar 2021](https://festivetechcalendar.com/) hosted by [Octopus Deploy](https://octopus.com/blog/festive-tech-calendar-hackathon), inspired by [Eric Nagakawa's tweet](https://twitter.com/ericnakagawa/status/1335833653738258434).\
Misconceptions is a small static webpage that lets you explore some facts you might have been taught in school that were disproven afterwards. Given your year of graduation, it will show them sorted by topic, category and group.

## Demo

Being fully static, the project can be deployed with Github Pages like [here](https://danielquinti.github.io/octo-hack-misconceptions/).


## Reference / Data model

All the information comes from [Wikipedia's List of Common Misconceptions](https://en.wikipedia.org/wiki/List_of_common_misconceptions#cite_note-34).
We parsed the data into a small JSON with the following model:
```javascript
Entries: {
            0: {
              theme,
              category,
              subcategory,
              references: [
                0: {
                  text,
                  year,
                  html
                }
              ],
              text,
              html
            },
  
            1: {...}
          }
```
During runtime, given a year, data gets queried and transformed into a suitable format for React:
```javascript
Entries: {
            0: {
              themeName,
              categories: [
                  0: {
                      categoryName,
                      subcategories: [
                          subcategoryName,
                          misconceptions: [
                              {...},
                              {...}
                          ]
                      ]
                  },
                  1: {...}
              ]
            },
            1: {...}
          }
```
## Development

To run this project locally make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.

Then:
- Clone the project

```bash
    git clone https://github.com/danielquinti/octo-hack-misconceptions
```

- Enter the directory

```bash
    cd octo-hack-misconceptions
```

- Install dependencies

```bash
    yarn
```

- Start the server

```bash
    yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Authors

- [@beltranaceves](https://www.github.com/beltranaceves)
- [@danielquinti](https://www.github.com/danielquinti)
- [@aarondominguez](https://www.github.com/beltranaceves)


## Credits
##### Free CSS 
<a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>

##### Issaaf kattan
