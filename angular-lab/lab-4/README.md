# Update Styles Using Angular Material

We will be using [Angular Material](https://material.angularjs.org/latest/) to style our app.

Install Angular Material in our app

    npm install --save angular-material

Include the following files in the index.html

```html
<script src="node_modules/angular-aria/angular-aria.js"></script>
    <script src="node_modules/angular-animate/angular-animate.js"></script>
    <script src="node_modules/angular-material/angular-material.js"></script>
    <script src="node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>

    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css">
```

**We also need to include "ngMaterial" as a dependency in our module.**

## Update html template in the <body> of our index.html

```html
<md-toolbar md-scroll-shrink>
    <div class="md-toolbar-tools">
        <h3>
            <span>Grad Academy Angular Messenger</span>
        </h3>
    </div>
    <md-content >
        <message-list></message-list>
    </md-content>
</md-toolbar>
```

## Update template of message-list to use the below template

```html
<section layout="row">
    <md-list>
        <div>
            <message></message>
        </div>
    </md-list>
</section>
<section layout="column" layout-padding flex-gt-sm="60" flex-gt-md="50">
    <md-white-frame class="md-whiteframe-2dp" flex layout="column" >
        <md-input-container class="md-block flex" >
            <label>New Message</label>
            <textarea rows="5" md-select-on-focus></textarea>
        </md-input-container>
        <md-button class="md-raised md-primary" flex-offset="75" layout-align="end">Send Message</md-button>
    </md-white-frame>
</section>

```

You will need to add all of the bindings back into the html.

## Update the message component template to use the below template

```html
<md-list-item class="md-2-line">
    <div class="md-list-item-text">
        <span class="md-title">{{$ctrl.message.user}} <span class="md-subhead md-caption">- {{$ctrl.message.date}}</span></span>
        <div class="md-body-2">{{$ctrl.message.content}}</div>
    </div>
    <md-divider></md-divider>
</md-list-item>
```

# Add Filters to Format Data And Make it More Presentable

Use [Angular Filters](https://docs.angularjs.org/api/ng/filter) to format how our data is displayed

- Filter Date of Message to the following format: 'MMM d, y h:mm:ss a'

- Order Messages by Create Date (newest message at the bottom)

