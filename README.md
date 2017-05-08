# Statistics 91r: Visualizing Music Genres from Wikipedia

Brian de Luna, Statistics AB '17

I had so much fun with this! Here's a bit about how everything was done.

## Summary
I’ve always been interested in the vast amount of music genres that exist. For example, a look at the Wikipedia page for Father John Misty’s album *I Love You, Honeybear* will show that it can be categorized as indie folk, indie rock, soft rock, baroque pop, or folktronica. I’ve always wanted to know the connection between these different genres that range from well-known to extremely esoteric. Given the vast amount of genres, how "close" are each of them to one another? What would a network of these genres look like?

In order to address this, I decided to look at all of the Billboard Top 100 songs since 1959, and take a look at the genres of their artists. Scraping the artists' Wikipedia pages, I was able to collect a large amount of genres, each which had connections to each other based on when they appeared on a page together. The resulting network is pretty cool!

## Implementation
### Scraping & Data Setup
In order to see the initial portion of this project (which was honestly half of the work), check out the Jupyter Notebook in the files above^ (or it's also [here]). There are a couple sections this lays out:
  - **Scraping**: Using BeautifulSoup (a Python library) to scrape the Billboard Top 100 songs, then navigate to the artist pages and scrape more data from there.
  - **Visualizations**: A couple exploratory visualizations (omg WordCloud, so cool, so advanced) for your viewing pleasure.
  - **Network Data Setup**: Once the data was scraped, I had to orient it in a particular way so that the songs and their connections could be expressed as nodes and edges--which then could be read in easily into our webpage program.

Each of these steps is explained in more detail in the notebook, with accompanying Python code.

### Network Visualization

The website files you can see above^. It was all written in JavaScript, and used the Vis.js network API to help with a lot of the visualization. Depending on how experienced you are with JavaScript, feel free to look around at all the files, but the most important one to check out is `main.js`. In this file, several key functions are defined, including:
  - a JQuery call that initializes the autofill search box
  - `filter_net()`, which gets the genre from the search box, and then filters out the node & edge network data to feed into the updated visualization
  - `draw()`, which sets up and inputs the network visualization

I made sure to leave a lot of comments, so it should all be explained pretty clearly in the code too.

## The Website: How to Use & Interpret

The UI of the website is pretty simple--the entire network is initially displayed, and you can choose to type in a specific genre in the search box (which will autofill once you start typing, to give you a gist of the genres available). Once you've typed in your genre, you can press the "Filter" button and the visualization will reload to include only that genre and all others connected to it. If you want to go back to the original visualization, you can press the "Reset Graph" button.

The graph is pretty easy to interpret as well: each of the nodes is a different genre, and if they are connected by an edge, then this means that they appeared together on Wikipedia at least once. The larger the node, the more popular (aka frequent) the genre; the thicker the edge, the more times that those two genres appeared together. You'll also notice that there are a good amount of genres that aren't connected to any others at all--those poor, lonely genres.

The files here link to GitHub pages, where this website is hosted! [Link is here!] Check it out!


   [here]: <https://github.com/bdeluna/stat91r/blob/master/Stat%2091r%20-%20Music.ipynbr>
   [Link is here!]: https://bdeluna.github.io/stat91r/
