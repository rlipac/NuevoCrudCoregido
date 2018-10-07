const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, customers) => {
            if (err) {
                res.json(err);
            }
            console.log(customers)
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?', [data], (err, customers) => {
            res.redirect('/');
        });
    })
};

controller.edit = (req, res) => {
    const { codUsu } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE codUsu = ?', [codUsu], (err, customer) => {
            res.render('customers_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { codUsu} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios set ? WHERE codUsu = ? ', [newCustomer, codUsu], (err, rows) => {
            res.redirect('/');
        });
    });
};



controller.delete = (req, res) => {
     // esta linia es igual a la de abajo
     /*  const id = req.params.id; */
    const { codUsu } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE codUsu = ?', [codUsu], (err, rows) => {
            res.redirect('/');

        });
    });

};



module.exports = controller;