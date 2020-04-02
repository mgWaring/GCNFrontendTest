# My GCN Frontend Task
Easist way to view it would be to run ```yarn```, then ```yarn run dev-server``` and then view the project that gets exposed on localhost:8080,

## What I changed:
- widened search bar input to fill whole bar and spaced it out sligtly more. I think it looks neater.
- move some inline styles present on the typeahead search into scss files. I reckon this is coming from the twitter-typeahead library though, and isn't related to page design. I've never used it so I don't know for sure.
- Added some borders to the videos, and changed spacing of video tiles. I like to have visual breakpoints between elements, and on mobile i like to have dud space that the user can touch without triggering an interaction.

## Why like this:
- I like React.
- I used the webpack dev server to proxy the fect request for the videos and avoid cors errors. With more time and a real project I'd set up a little express erver to handle that better, but this does the trick fro quick and dirty.
- getting the project set up to use react, babel, webpack, scss and other bits and bobs s quite time consuming. But once it's done it make development so much faster, and iteration so much easier. It's absolutely worth it in any meaningful project, evena  proof of concept. Here though, it moght have taken just a little too long!

## What next:
- Integrate it into a larger framework. I like react, working to an exisitng react framework would make these changes a lot easier (wouldn't have to copy the page for a start). The same goes for working within a css framework. I like .scss files, and being able to build upon existing styling without duplicating code is very nice. It also tag-teams with react nicely, making it easy to separate structure and styling whilst still maintaining the relationship between the difinitions (put your 'component.jsx' and 'component.scss' in the same folder etc etc)
- Abstract out repetition. Work to ensure all elemnts on the page are componentized so that we are re-using hard work rather than duplicating it.
- (React specific) add some error boundaries. Hopefully this is implemented in the existing code. If not, then I'd add error boundaries to beach component so that when they fail it's immediately obvious which file is to blame. JS error messages can be pretty opaque, so anything that helps with debugging is going to bea  real timesaver (and frustration minimiser!) 
- Add autoloading to videos instead of 'show more button' less interrupts to user is usually a good thing. Let them scroll forever!
- there's a dist folder there, that contains some webpack output, but I haven't set he project up fully to bundle for deployment. That would really go hand in ahnd with setting up the small express erver to hande routing and serve the bundled assets.



