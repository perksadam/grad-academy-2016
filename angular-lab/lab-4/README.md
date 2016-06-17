# Update Styles Using Angular Material

We will be using [Angular Material](https://material.angularjs.org/latest/) to style our app.

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
        <span class="md-title">{{$ctrl.message.userName}} <span class="md-subhead md-caption">- {{$ctrl.message.date}}</span></span>
        <div class="md-body-2">{{$ctrl.message.content}}</div>
    </div>
    <md-divider></md-divider>
</md-list-item>
```

#Add Filters to Format Data And Make it More Presentable

Filter Date of Message

Order Messages by Create Date (newest message at the bottom)

Filter the number of messages shown (limit to 5?)
