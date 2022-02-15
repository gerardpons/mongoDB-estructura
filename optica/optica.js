use OPTICA

db.createCollection('marca', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'marca',
      required: ['nombre', 'proveedor'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        proveedor: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('proveedor', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'proveedor',
      required: ['nombre', 'direccion', 'telefono', 'fax', 'nif'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'object',
          title: 'direccion',
          required: ['calle', 'numero', 'ciudad', 'codigo_postal', 'pais'],
          properties: {
            calle: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            piso: {
              bsonType: 'string'
            },
            puerta: {
              bsonType: 'string'
            },
            ciudad: {
              bsonType: 'string'
            },
            codigo_postal: {
              bsonType: 'string'
            },
            pais: {
              bsonType: 'string'
            }
          }
        },
        telefono: {
          bsonType: 'string'
        },
        fax: {
          bsonType: 'string'
        },
        nif: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('cliente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'cliente',
      required: ['nombre', 'direccion', 'telefono', 'email', 'fecha_registro'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'object',
          title: 'direccion',
          required: ['calle', 'numero', 'ciudad', 'codigo_postal', 'pais'],
          properties: {
            calle: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            piso: {
              bsonType: 'string'
            },
            puerta: {
              bsonType: 'string'
            },
            ciudad: {
              bsonType: 'string'
            },
            codigo_postal: {
              bsonType: 'string'
            },
            pais: {
              bsonType: 'string'
            }
          }
        },
        telefono: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        fecha_registro: {
          bsonType: 'date'
        },
        referido_por: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('empleado', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'empleado',
      required: ['nombre'],
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('venta', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'venta',
      required: ['cliente', 'gafas', 'empleado'],
      properties: {
        cliente: {
          bsonType: 'objectId'
        },
        gafas: {
          bsonType: 'objectId'
        },
        empleado: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('gafas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'gafas',
      required: ['marca', 'graduacion', 'tipo_montura', 'color_montura', 'color_cristal', 'precio'],
      properties: {
        marca: {
          bsonType: 'objectId'
        },
        graduacion: {
          bsonType: 'object',
          title: 'graduacion',
          required: ['grad_izquierda', 'grad_derecha'],
          properties: {
            grad_izquierda: {
              bsonType: 'string'
            },
            grad_derecha: {
              bsonType: 'string'
            }
          }
        },
        tipo_montura: {
          bsonType: 'string'
        },
        color_montura: {
          bsonType: 'string'
        },
        color_cristal: {
          bsonType: 'object',
          title: 'color_cristal',
          required: ['color_izquierdo', 'color_derecho'],
          properties: {
            color_izquierdo: {
              bsonType: 'string'
            },
            color_derecho: {
              bsonType: 'string'
            }
          }
        },
        precio: {
          bsonType: 'double'
        }
      }
    }
  }
});