
<div align="center">
    <img src="https://craftcarnivalpgh.com/static/craft-carnival.8906489c.svg" alt="Logo" width='200px' height='200px'/>
</div>

# Gatsby Staticly Generated Event Site

An event site using a Wordpress backend, React+Gatsby frontend, with a GraphQL API

Used Gatsby.js and GraphQL over a Wordpress database to generate a static site written in Javascript and React.js. Continuously deployed through Netlify and maintained in a Github repository. 

UI is changed by updating Github master repository, which triggers a deploy script that draws data from an existing Wordpress installation. The data on the site is maintained through Wordpress Custom Post-types, categories, and taxonomies. 

Currently, the site has to be redeployed manually through Netlify after updating any Wordpress data. Next feature will be to automatically redeploy based on a trigger from Wordpress.
