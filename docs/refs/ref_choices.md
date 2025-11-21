# Choices

The **choices** key value type allows you to open a dropdown menu of predefined options in your map editor. They are defined in Godot by choosing a value type of dictionary, with each key being the option text and each value being the property value. Keys are always Strings, but values can be either Int or String.

![](../images/ref_kvp_choices1.png)

Normally the default value is set in Class Properties, but for Choices we can't do this (not without a fair amount of trouble). Instead we use Class Property Descriptions to set a default value. We do this by creating an Array with 2 elements: the first element is a String serving as the description; the second element is the default choice and should be either an Int or String matching one of the option values defined in Class Properties.

Once written to the FGD you should get a something like this in your map editor:

![](../images/ref_kvp_choices2.png)

> _NOTE: While Bool types always generate a choices key value type, you don't need to set them up any differently than any other property. FuncGodot will automatically format Bool types for you on FGD export._