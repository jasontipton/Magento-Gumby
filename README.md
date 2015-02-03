# Magento-Gumby
Magento Gumby is a fully responsive Magento theme combining Magento Community Edition 1.9 blank theme with the powerful Gumby framework.  The theme strips out 90% of default Magento CSS and replaces it with Gumby's well organized SCSS.  This includes adding in Gumby's beautiful UI elements all throughout Magento's frontend.   Fully integrating Gumby into Magento also provides the theme with a responsive grid system that is used both in template files and CMS pages, Static Blocks, Category & Product Descriptions, essentially everywhere within the site.

Specs  
[The Awesome News](https://github.com/jasontipton/Magento-Gumby#the-awesome-news "The Awesome News")  
[Why Build This?](https://github.com/jasontipton/Magento-Gumby#why-gumby-magento "Why Build This?")  
[Who Should Use This Theme](https://github.com/jasontipton/Magento-Gumby#theme-users "Who Should Use This Theme")  
[Tech Specs](https://github.com/jasontipton/Magento-Gumby#tech-specs "Tech Specs")  
[Show Me The Demo](https://github.com/jasontipton/Magento-Gumby#demo-site "Show Me The Demo")  
[Compatibility](https://github.com/jasontipton/Magento-Gumby#compatibility "Compatibility")  
[How To Install](https://github.com/jasontipton/Magento-Gumby#how-to-install "How To Install") 
[Optimal Configuration](https://github.com/jasontipton/Magento-Gumby#optimal-configuration "Optimal Configuration") 
[Magento Extension](https://github.com/jasontipton/Magento-Gumby#magento-extension "Magento Extension")  
[Using the CMS Demo Pages](https://github.com/jasontipton/Magento-Gumby#using-the-cms-demo-pages "Using the CMS Demo Pages")  
[Roll Credits](https://github.com/jasontipton/Magento-Gumby#roll-credits "Roll Credits")  


##[The Awesome News](#the-awesome-news)
All the work integrating the Gumby Framework into Magento is already complete within the theme.  No, part of Magento or Gumby has been left out.  The Gumby UI page has been included to serve as a reference when building your own theme.  All of the optional Gumby Extensions (Responsive Images, Responsive Comments, InView, Shuffle, Parallax, and FitText) are built in and can be seen at the Gumby Extension page.  A full page with responsive updates has been added of all the default Widgets in Magento.

##[Why Gumby Magento](#why-gumby-magento)
This theme was built to fill a gap serious frontend developers needed solved.  For e-commerce Magento developers who want to build a responsive website the current options are to either use CE 1.9's RWD theme, which comes with its own inherent limitations as there is no responsive grid system to use for CMS pages or other admin controled content, or purchase a pre-made theme on one of the theme market places.  While there is nothing wrong with purchasing a pre-made theme they are often heavily edited for the purpose of that theme's design in which case if the project they are purchased for has a destictly different design goal it can take a large number of hours to completely modify the purchased theme to produce the desired project result.

Instead the goal with the Magento Gumby theme is to provide Magento in a mostly unaltered format while adding the Gumby framework as a design layer in a way that added responsive capabilities and updated the UI elements.  

The bonus is that Gumby also has several extensions for popular items like FitText and Parallax that have been included.  Don't want to use them? Simply comment out 1 line and they are gone.  

##[Theme Users](#theme-users)
This theme is for frontend developers working in e-commerce, specifically developing responsive websites using Magento. It is intended to server as a responsive base that frontend developers can apply their designs to using all of Magento's product, catalog, and CMS features along side of Gumby's grid system, improved UI elements, and Extensions. 

##[Tech Specs](#tech-specs)
So you want to know what's under the hood?  
[Magento Community Edition 1.9](http://www.magentocommerce.com/download "Magento CE 1.9")  
[SASS](https://github.com/sass/sass "SASS - Nathan Weizenbaum")  
[Compass](https://github.com/Compass/compass "Compass - Chris Eppstein")  
[Modular Scale](https://github.com/at-import/modular-scale "Modular Scale - Scott Kellum")  
[FitText](http://fittextjs.com "FitText - Paravel")  
[jQuery 1.10.1](http://jquery.com/ "jQuery 1.10.1")  
[Modernizr 2.6.2](http://modernizr.com/ "Modernizr 2.6.2")  
[Shuffle](https://github.com/GumbyFramework/Shuffle "Shuffle - Gumby")  
[Parallax](https://github.com/GumbyFramework/Parallax "Parallax - Gumby")  
[Responsive Comments](https://github.com/GumbyFramework/ResponsiveComments "Responsive Comments - Gumby")  
[Responsive Images](https://github.com/GumbyFramework/ResponsiveImages "Responsive Images - Gumby")  
[InView](https://github.com/GumbyFramework/InView "InView - Gumby")  

##[Demo Site](#demo-site)
Homepage - http://dev.frontlinedev.com/  
Gumby UI - http://dev.frontlinedev.com/gumby-ui  
Gumby Grid Demo - http://dev.frontlinedev.com/gumby-demo  
Gumby Extensions - http://dev.frontlinedev.com/gumby-extensions  
Magento Widgets - http://dev.frontlinedev.com/magento-widgets  

##[Compatibility](#compatibility)
The theme was built based on Magento Community Edition version 1.9's default/blank theme. This provided the most stripped down version of Magento but still included all of its award winning e-comm features.  Previous versions of Magento may or may not be compatible.  If you have a website running an older verion (less than CE 1.9) of Magento and want the theme modified for use with your site contact me (jason@frontlinedev.com)

##[How To Install](#how-to-install)
The Magento Gumby theme is a base theme meant to be built upon.  Follow the steps below and any modifications you make to the theme will not only survive upgrades but will follow Magento's fall back theme heirarchy.  


##[Optimal Configuration](#optimal-configuation)
Download the theme zip file from Github, move it to the root of your Magento installation where you see Magento folders such as app and skin (often times this will be your public_html folder), and unzip the file.  This will add the theme files to the necessary paths app/design/frontend, skin/frontend, app/code/local.  Note - app/code/local is for the optional Magento extension (read below for more details). 
Now create your own theme name folders listed below as YOUR_THEME:
app/design/frontend/frontlinedev/YOUR_THEME/etc  
app/design/frontend/frontlinedev/YOUR_THEME/layout  
app/design/frontend/frontlinedev/YOUR_THEME/locale  
app/design/frontend/frontlinedev/YOUR_THEME/template  
skin/frontend/frontlindev/YOUR_THEME/css  
skin/frontend/frontlindev/YOUR_THEME/images  
skin/frontend/frontlindev/YOUR_THEME/js  
skin/frontend/frontlindev/YOUR_THEME/sass  

In the Magento admin panel go to System->Configuration->Design  
If you have multiple stores choose the appropriate Store View  
Add the following settings -  
Package -> Current Package Name = frontlinedev  
Themes -> Translations = YOUR_THEME  
Themes -> Templates = YOUR_THEME  
Themes -> Skin = YOUR_THEME  
Themes -> Layout = YOUR_THEME  
Themes -> Default = gumby  

Click Save Config in the upper right.  

This instructs Magento to first look for theme files in YOUR_THEME and if it does not find them to roll back and look within the gumby theme. Any files it cannot find will then be loaded from base/default.  Now when you want to edit a file simply copy that file from frontlinedev/gumby into frontlinedev/YOUR_THEME and it will become part of your custom theme. 

Last, be sure to clear Magento caches (System -> Cache Management).  The theme should now be live.

This is the preferred method as it not only prepares your site for Magento upgrades but also preserves the gumby theme for any future updates all without overwriting your custom theme.  


##[Magento Extension](#magento-extension)
In the repo you'll notice there is an extension app/code/local/Frontlinedev/Gumby.  A theme (in my opinion) should not have to override any section of the core file.  And I believe this is absolutely true...unless there is HTML being generated in the core and creating an extension is the best way to update that HTML with the appropriate class names and markup structure.  That is what this extension was created for.  For products' Custom Options like select, date, and time Magento chooses to create the markup inside a core file thus preventing good intentioned frontend developers from making edits within the appropriate .phtml file.  This extension updates those product Custom Options not reachable via app/design/frontend.  If your project will not be making making use of Custom Option then this extension can be left out.  

##[Using the CMS Demo Pages](#using-the-cms-demo-pages)
The Magento Gumby theme has several CMS pages in the demo.  These files are included in the repo under app/design/frontend/frontlinedev/gumby/template/page/.  To add these to your project log in to the Magento admin and create a CMS page for each demo page you want to include then add the provided code snippet.  

    Page Title: Gumby UI
    URL Key: gumby-ui
    Content: {{block type="core/template" template="page/gumby-ui.phtml"}}
    
    Page Title: Gumby Extensions
    URL Key: gumby-extensions
    Content: {{block type="core/template" template="page/gumby-extensions.phtml"}}
    
    Page Title: Gumby Demo
    URL Key: gumby-demo
    Content: {{block type="core/template" template="page/gumby-demo.phtml"}}    


##[Roll Credits](#roll-credits)
This theme was built by Jason Tipton a Magento Certified Frontend Developer career focused in e-commerce website development.  Javascript conflicts, Magento core extension, and invaluable experience and advice was provided by Sean Breeden.

Jason Tipton  
LinkedIn@ https://www.linkedin.com/pub/jason-tipton/75/6a8/606  
Blog@ http://frontlinedev.com/  

Sean Breeden  
LinkedIn@ www.linkedin.com/in/seanbreeden  
Blog@ http://www.seanbreeden.com/  

A quick thank you to http://doctoripsum.com/ for the product Short Descriptions and Descriptions.