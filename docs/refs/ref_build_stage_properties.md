# Build Stage Properties

In _Quake_ mapping there are a number of compiler only key value pairs that can alter the way the map is built, typically preceded by an underscore. These include properties like __phong_, __minlight_, and __shadow_.

_FuncGodot_ also has a few properties that can be used as part of the build process, all of which are customizable in the Map Settings resource. These properties are exposed by the FGD to be set in the map file and read by FuncGodot's core classes throughout the build stages. These build stage properties are:

| Map Settings Property           | Default Key            | Variant Type                                                               | Notes                                                                                                                                                          |
| ------------------------------- | ---------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entity Name Property            |                        | [String](https://docs.godotengine.org/en/stable/classes/class_string.html) | Property used to rename nodes. The entity is renamed "entity_" + entity_name_property. This can be overridden by the entity definition.                        |
| Entity Smoothing Property       | _phong                 | [Bool](https://docs.godotengine.org/en/stable/classes/class_bool.html)     | Determines whether the _FuncGodotFGDSolidClass_ entity performs mesh smoothing operations.                                                                     |
| Entity Smoothing Angle Property | _phong_angle           | [Float](https://docs.godotengine.org/en/stable/classes/class_float.html)   | The angular threshold that determines when a _FuncGodotFGDSolidClass_ entity's mesh vertices are smoothed.                                                     |
| Vertex Merge Distance Property  | _vertex_merge_distance | [Float](https://docs.godotengine.org/en/stable/classes/class_float.html)   | Provides a snapping epsilon for vertices in a _FuncGodotFGDSolidClass_ entity's mesh. Adjusting this value can remove instances of gaps between polygon seams. |

Some of these properties have built-in support through the use of the default [FuncGodotFGDBaseClass](ref_fgd_resources.html#Base) resources _Phong_ and _VertexMergeDistance_.