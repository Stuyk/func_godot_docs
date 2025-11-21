# Bit Flags

Bit flags are the most complex key value type to set up, but offer a lot in simplifying complex comparisons and systems in your game scripts.

To set up a bit flags property, choose Array as the value's Variant type. Each element of the Array will be an Array as well, representing a single Flag. Each Flag Array is composed of 3 elements: a String serving as the Flag Description, an Int declaring the Flag's Bit Value, and an Int representing the Flag's default state.

Bit Flag properties do not utilize descriptions so there is no need to add one to the entity's Class Property Descriptions dictionary.

![](../images/ref_kvp_bitflags1.png)

Once exported, you should get something like this:

![](../images/ref_kvp_bitflags_tb.png) ![](../images/ref_kvp_bitflags_jack.png)

Left, Trenchbroom; Right, J.A.C.K.; Not shown: NetRadiant Custom because I'm lazy, but it's pretty similar to J.A.C.K. in this regard.

Even though Godot uses 64 bit signed integers, map editors only seem to offer support for up to 24 bit flags. This is largely an artifact of the Quake engine, specifically its Quake C programming language. QuakeC doesn't have an integer type and instead used a 32 bit floating point number. The result was that only 24 bits remained to be used in bitwise operations. The Half-Life engine inherited this limitation, and subsequent Quake and Valve map editors designed their bit flag menus with this limitation in mind.

In TrenchBroom this isn't too much of a problem as you can have multiple bit flag key value pairs. Unfortunately other map editors are designed to only support one group of flags that they assume to be **spawnflags**, no matter what they're called in the FGD. J.A.C.K. will just overwrite spawnflags. NetRadiant Custom will throw errors if it detects flag values with matching bits and be unable to open. All key value types of flags will be compiled into the entity's Flags property and saved in the map file with the key "spawnflags".

If you're using another map editor other than TrenchBroom, you can still use multiple flags key value pairs or inherit them across multiple Base Classes. Just make sure each flags property applied to an entity has a unique bit value and expect FuncGodot to build it as a compiled _spawnflags_ bitmask.

![](../images/ref_kvp_bitflags2.png)