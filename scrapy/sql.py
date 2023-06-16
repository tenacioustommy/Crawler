import pymysql
from pymysql.cursors import DictCursor


def get_conn():
    conn = pymysql.connect(
        user='user', host="localhost", port=3306, password='hzh475601', database='spider')
    return conn


def change(sql, isinsert=False):
    try:
        conn = get_conn()
        c = conn.cursor()
        c.execute(sql)
        conn.commit()
        if isinsert:
            newid = c.lastrowid
            return newid
        else:
            return None
    except:
        conn.rollback()
    finally:
        if conn:
            conn.close()


def add(sql):
    return change(sql, True)


def update(sql):
    return change(sql)


def delete(sql):
    return change(sql)


def get_one(sql):
    try:
        conn = get_conn()
        c = conn.cursor(cursor=DictCursor)
        c.execute(sql)
        return c.fetchone()
    except Exception as e:
        print(e)
    finally:
        if conn:
            conn.close()


def get_all(sql):
    try:
        conn = get_conn()
        c = conn.cursor(cursor=DictCursor)
        c.execute(sql)
        return c.fetchall()
    except Exception as e:
        print(e)
    finally:
        if conn:
            conn.close()


if __name__ == '__main__':
    sql = "UPDATE stu SET sage=19 WHERE sage=18"
    # update(sql)
    get_all("SELECT * FROM stu ")
